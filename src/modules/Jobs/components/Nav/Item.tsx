import { useSortable, SortableContext } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React, { useState } from "react";
import Move from "../../../../assets/Move";
import Save from "../../../../assets/Save";
import Edit from "../../../../assets/Edit";

type IChildren = {
  id: number;
  title: string;
  target: string;
  visible?: boolean;
};

type IItem = {
  id: number;
  title: string;
  target?: string;
  visible?: boolean;
  children?: IChildren[];
};

const ChildItem: React.FC<{
  child: IChildren;
  isEditing: boolean;
  setEditingId: (id: number | null) => void;
}> = ({ child, isEditing, setEditingId }) => {
  const [title, setTitle] = useState(child.title);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: child.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleEdit = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    setEditingId(child.id);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSave = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    setEditingId(null); // Close the editor
  };

  const dragListeners = isEditing ? {} : listeners;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...dragListeners}
      className="bg-secandary my-3 mr-2 ml-5 p-2 flex items-center gap-3 cursor-grab"
    >
      <Move />
      <div className="relative flex gap-3 justify-between">
        {isEditing ? (
          <>
            <input
              type="text"
              value={title}
              className="w-[150px]"
              onChange={handleChange}
            />
            <div onMouseDown={handleSave}>
              <span className="pointer-events-none h-8 inset-y-0 end-0 grid w-8 place-content-center bg-gray-200 cursor-pointer">
                <Save />
              </span>
            </div>
          </>
        ) : (
          <div className="flex justify-between w-[150px]">
            <div>{title}</div>
            <div onMouseDown={handleEdit} className="cursor-pointer">
              <Edit />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Item: React.FC<{ item: IItem }> = ({ item }) => {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [title, setTitle] = useState(item.title);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const dragListeners = editingId !== null ? {} : listeners;

  const handleEdit = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    setEditingId(item.id);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSave = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    setEditingId(null);
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...dragListeners}>
      <div className="bg-secandary p-2 mb-2 flex items-center gap-2 cursor-grab w-[250px]">
        <Move />
        <div className="relative flex gap-3 justify-between">
          {editingId === item.id ? (
            <>
              <input
                type="text"
                value={title}
                className="w-[150px]"
                onChange={handleChange}
              />
              <div onMouseDown={handleSave}>
                <span className="pointer-events-none h-8 inset-y-0 end-0 grid w-8 place-content-center bg-gray-200 cursor-pointer">
                  <Save />
                </span>
              </div>
            </>
          ) : (
            <div className="flex justify-between w-[150px]">
              <div>{title}</div>
              <div onMouseDown={handleEdit} className="cursor-pointer">
                <Edit />
              </div>
            </div>
          )}
        </div>
      </div>
      {item?.children?.length ? (
        <SortableContext items={item.children.map((child) => child.id)}>
          {item.children.map((child) => (
            <ChildItem
              key={child.id}
              child={child}
              isEditing={editingId === child.id}
              setEditingId={setEditingId}
            />
          ))}
        </SortableContext>
      ) : null}
    </div>
  );
};

export default Item;
