import { useState } from 'react';
import './App.css';
import bin from './images/bin.png'

function App() {
  const [boxActive, setBoxActive] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, { id: Date.now(), text: inputValue, active: false, }]);
      setInputValue('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const activeTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, active: !task.active } : task
    ))
  }

  return (
    <div className="flex items-center justify-center w-full h-screen px-[20px] xl:px-0">
      <div className='flex justify-center h-[720px] w-full lg:w-[1000px] rounded-[48px] bg-black p-[40px_20px] md:p-[40px_90px] lg:p-[40px_140px]'>
        <div className='flex flex-col items-center gap-[30px] overflow-y-hidden h-full w-full'>
          <div className="flex flex-col items-center gap-[20px] w-full">
            <h1 className='font-bold text-[32px] text-blue text-center'>To-Do List App</h1>
            <div className='flex flex-col-reverse gap-[10px] items-center relative w-full'>
              <button onClick={addTask} className='outline-none sm:absolute sm:right-[5px] sm:top-[50%] sm:translate-y-[-50%] p-[10px_49px] bg-blue sm:bg-black text-[16px] font-bold text-black sm:text-blue rounded-[22px]'>Ekle</button>
              <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Görev adı girin' className='outline-none text-[16px] placeholder:text-blackv2 font-normal w-full h-[50px] rounded-[22px] bg-blue px-[20px] sm:pl-[30px] sm:pr-[169px]' type="text" />
            </div>
          </div>
          <ul className="flex flex-col gap-[14px] w-full px-[12px] overflow-y-auto overflow-x-hidden h-full sm:px-[30px]">
            {tasks.map(task => (
              <li key={task.id} className='flex justify-between gap-[20px] items-start w-full'>
                <div className='flex items-start gap-[14px] w-full'>
                  <div onClick={() => activeTask(task.id)} className='flex items-center justify-center cursor-pointer min-w-[36px] min-h-[36px] border-[2px] border-blue rounded-[14px]'>
                    <div className={`${task.active ? 'opacity-100' : 'opacity-0'} transition-all duration-300 min-w-[24px] min-h-[24px] bg-blue rounded-[10px]`}></div>
                  </div>
                  <h3 className={`text-[16px] ${task.active ? 'opacity-50 line-through' : 'opacity-100'} font-medium mt-[6px] max-w-full break-all whitespace-pre-wrap text-white`}>{task.text}</h3>
                </div>
                <button onClick={() => deleteTask(task.id)} className='cursor-pointer flex items-center justify-center min-w-[36px] min-h-[36px] rounded-[14px] bg-red'>
                  <img className='min-w-[20px] min-h-[20px] object-center object-cover' src={bin} alt="çöp kutusu" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
