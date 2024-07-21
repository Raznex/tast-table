import React, { useState } from 'react';
import './TaskForm.scss';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title, description, date });
    setTitle('');
    setDescription('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className='task-form'>
      <div className='task-form__inputs'>
        <label htmlFor='title' className='task-form__label'>
          Заголовок
        </label>
        <input
          type='text'
          placeholder='Заголовок'
          className='task-form__input'
          id='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className='task-form__inputs'>
        <label htmlFor='description' className='task-form__label'>
          Описание
        </label>
        <textarea
          placeholder='Описание'
          id='description'
          value={description}
          className='task-form__input task-form__textarea'
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className='task-form__inputs'>
        <label htmlFor='date' className='task-form__label'>
          Дата завершения
        </label>
        <input
          type='date'
          id='date'
          value={date}
          className='task-form__input'
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <button type='submit' className='task-form__button'>
        Добавить задачу
      </button>
    </form>
  );
};

export default TaskForm;
