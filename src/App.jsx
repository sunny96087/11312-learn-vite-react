import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Modal } from 'bootstrap'

console.log(import.meta.env.VITE_APP_PATH) // http://localhost:3000

// 使用解構
const { VITE_APP_PATH } = import.meta.env
function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    ;(async () => {
      const res = await axios.get(VITE_APP_PATH)
      console.log(res.data)
    })()
  }, [])

  // 創建兩個 ref：
  // modalRef 用於引用 modal DOM 元素
  // customModalRef 用於存儲 Modal 實例
  const modalRef = useRef(null)
  const customModalRef = useRef(null)

  // 當組件掛載時初始化 Modal
  useEffect(() => {
    // 使用 modalRef.current 獲取 DOM 元素
    console.log(modalRef.current)
    // 創建新的 Modal 實例並存儲在 customModalRef 中
    customModalRef.current = new Modal(modalRef.current)
  }, [])

  // 打開 Modal 的函數
  const openModal = () => {
    customModalRef.current.show()
  }

  // 關閉 Modal 的函數
  const closeModal = () => {
    customModalRef.current.hide()
  }

  return (
    <>
      <button type="button" className="btn btn-primary" onClick={openModal}>
        Launch demo modal
      </button>

      <div className="modal fade" ref={modalRef}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                onClick={closeModal}
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={closeModal}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={closeModal}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* test */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="btn btn-primary"
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
