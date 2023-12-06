import { Canvas, Tldraw, track, useEditor } from '@tldraw/tldraw';
import '@tldraw/tldraw/tldraw.css'
import { useEffect } from 'react';
import './App.css'
import { Timebox } from './Timebox';

const CustomUI = track(() => {
	const editor = useEditor()

	useEffect(() => {
    editor.updateInstanceState({ canMoveCamera: false });
		const handleKeyUp = (e) => {
			switch (e.key) {
				case 'Delete':
				case 'Backspace': {
					editor.deleteShapes(editor.selectedShapeIds)
					break
				}
				case 'v': {
					editor.setCurrentTool('select')
					break
				}
				case 'e': {
					editor.setCurrentTool('eraser')
					break
				}
				case 'x':
				case 'p':
				case 'b':
				case 'd': {
					editor.setCurrentTool('draw')
					break
				}
        case 'z':
          if (e.ctrlKey) {
            editor.undo()
          }
          break;
        default:
          
          break;
			}
		}

		window.addEventListener('keyup', handleKeyUp)
		return () => {
			window.removeEventListener('keyup', handleKeyUp)
		}
	})

	return (
		<div className="custom-layout">
			<div className="custom-toolbar">
				<button
					className="custom-button"
					data-isactive={editor.currentToolId === 'select'}
					onClick={() => editor.setCurrentTool('select')}
				>
					Select
				</button>
				<button
					className="custom-button"
					data-isactive={editor.currentToolId === 'draw'}
					onClick={() => editor.setCurrentTool('draw')}
				>
					Pencil
				</button>
				<button
					className="custom-button"
					data-isactive={editor.currentToolId === 'eraser'}
					onClick={() => editor.setCurrentTool('eraser')}
				>
					Eraser
				</button>
			</div>
		</div>
	)
})

function App() {

  return (
    <div style={{ position: 'fixed', inset: 0 }}>
      <Tldraw hideUi>
        <Canvas />
        <CustomUI />
        <Timebox />
      </Tldraw>
    </div>
  );
}

export default App;
