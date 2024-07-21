import React, { useState } from 'react';
import './Task.scss';
import { CiEdit } from 'react-icons/ci';
import { RiSave3Fill } from 'react-icons/ri';
import { FaRegTrashAlt } from 'react-icons/fa';
const Task = ({ task, updateTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [date, setDate] = useState(task.date);

  const handleSave = () => {
    updateTask(task.id, { title, description, date });
    setIsEditing(false);
  };

  return (
    <div className={`task ${!isEditing ? '' : 'task_editing'} `}>
      <div className='task__container'>
        <input
          className='task__text task__text_title'
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={!isEditing}
        />
        <input
          className='task__text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={!isEditing}
        />
        <input
          className='task__text'
          type='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
          disabled={!isEditing}
        />
      </div>
      <div className='task__buttons'>
        {isEditing ? (
          <button className='task__button' onClick={handleSave}>
            <RiSave3Fill size='20' />
          </button>
        ) : (
          <button className='task__button' onClick={() => setIsEditing(true)}>
            <CiEdit size='20' />
          </button>
        )}
        <button
          className='task__button task__button_delete'
          onClick={() => deleteTask(task.id)}
        >
          <FaRegTrashAlt size='20' />
        </button>
      </div>
    </div>
  );
};

export default Task;
