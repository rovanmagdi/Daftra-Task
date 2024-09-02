import { useRef, useState } from "react";
import Settings from "../../../../assets/Settings";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import Item from "./Item";
import Arrow from "../../../../assets/Arrow";

const Nav = () => {
  const arr = [
    { id: 1, title: "Dashboard", target: "/" },
    {
      id: 2,
      title: "Job Applications",
      target: "/applications",
      children: [
        { id: 7, title: "John Doe", target: "/applications/john-doe" },
        { id: 10, title: "James Bond", target: "/applications/james-bond" },
        {
          id: 20,
          title: "Scarlett Johansson",
          target: "/applications/scarlett-johansson",
          visible: false,
        },
      ],
    },
    {
      id: 3,
      title: "Companies",
      target: "/companies",
      visible: false,
      children: [
        { id: 8, title: "Tanqeeb", target: "/companies/1" },
        { id: 9, title: "Daftra", target: "/companies/2" },
        { id: 11, title: "TBD", target: "/companies/14" },
      ],
    },
    {
      id: 4,
      title: "Qualifications",
      children: [
        { id: 14, title: "Q1", target: "/q1" },
        { id: 15, title: "Q2", target: "/q2" },
      ],
    },
    { id: 5, title: "About", target: "/about" },
    { id: 6, title: "Contact", target: "/contact" },
  ];

  // states
  const [itemData, setItemData] = useState(arr);
  const [edit, setEdit] = useState(false);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    // Parent item dragging
    const activeParentIndex = itemData.findIndex(
      (item) => item.id === active.id
    );
    const overParentIndex = itemData.findIndex((item) => item.id === over.id);

    // If both active and over items are parent items, reorder them
    if (activeParentIndex !== -1 && overParentIndex !== -1) {
      if (activeParentIndex !== overParentIndex) {
        setItemData((items) =>
          arrayMove(items, activeParentIndex, overParentIndex)
        );
      }
    } else {
      // Find parent items for active and over children
      const activeParent = itemData.find((item) =>
        item.children?.some((child) => child.id === active.id)
      );
      const overParent = itemData.find((item) =>
        item.children?.some((child) => child.id === over.id)
      );

      if (activeParent && overParent && activeParent === overParent) {
        const activeChildIndex = activeParent.children!.findIndex(
          (child) => child.id === active.id
        );
        const overChildIndex = overParent.children!.findIndex(
          (child) => child.id === over.id
        );

        if (activeChildIndex !== overChildIndex) {
          const updatedChildren = arrayMove(
            activeParent.children!,
            activeChildIndex,
            overChildIndex
          );
          setItemData((items) =>
            items.map((item) =>
              item.id === activeParent.id
                ? { ...item, children: updatedChildren }
                : item
            )
          );
        }
      }
    }
  };

  // Make long chick to action edit or delete item
  const timerRef: React.MutableRefObject<number | undefined> = useRef<
    number | undefined
  >(undefined);
  const holdTime = 2000;

  const handleMouseDown = () => {
    timerRef.current = setTimeout(() => {
      setEdit(!edit);
      resetProgress();
    }, holdTime);
  };

  const handleMouseUpOrLeave = () => {
    resetProgress();
  };

  const resetProgress = () => {
    if (timerRef.current !== undefined) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = undefined;
  };

  return (
    <div className=" w-min-content">
      <DndContext onDragEnd={handleDragEnd}>
        <SortableContext items={itemData.map((item) => item.id)}>
          <div className="relative mt-5">
            <div
              className="h-8 cursor-pointer"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUpOrLeave}
              onMouseLeave={handleMouseUpOrLeave}
            >
              {edit ? (
                <span
                  className="absolute right-0"
                  onClick={() => {
                    setEdit(false);
                  }}
                >
                  X
                </span>
              ) : (
                <Settings className="absolute right-0" />
              )}
            </div>
            <div className="flex flex-col bg-white p-5">
              {edit ? (
                <>
                  {itemData.map((item) => (
                    <Item item={item} key={item.id} />
                  ))}
                </>
              ) : (
                <>
                  {itemData.map((item) => (
                    <div className="  items-center gap-3  cursor-grab w-[250px]">
                      <p className="bg-secandary p-2 m-2 flex items-center gap-3">
                        {item?.title} {item?.children?.length && <Arrow />}
                      </p>
                      <div>
                        {item?.children?.map((child) => (
                          <div className="my-3 mr-2 ml-5 bg-secandary p-2">
                            {child?.title}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default Nav;
