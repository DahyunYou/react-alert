import './App.css';
import { useEffect, useState } from 'react';
import data from './data';

function App() {
	let [alerts, setAlerts] = useState(data);
	let [close, setClose] = useState(true);
	let [hidden, setHidden] = useState('');

	// let alertsClose = () => {
	// 	setClose(!close);
	// }

	// AI 활용
	let btnClose = (i) => {
		// 여기에서 i는 파라미터(0, 1, 2... 같은 번호가 들어옴)
		let close = [...hidden];
		close[i] = 'hidden';
		setHidden(close)
		// document.querySelector('.btn_close').addEventListener('click', function() {
		// 	document.querySelector('.alerts').classList.add('hidden');
		// })
		// if (option1 == 'hidden') setHidden('')
		// else setHidden('hidden')
	};

	// let btnConfirm = () => {
	// 	// document.querySelector('.btn_confirm').addEventListener('click', function() {
	// 	// 	document.querySelector('.alerts').remove();
	// 	// })
	// 	setClose(!close);
	// }

	// let $hidden = (option) => {
	// 	if (option == "hidden") setHidden("");
	// 	else setHidden("hidden");
	// }
	// console.log(useState(data))
	return (
		<div className="App">
			{
				alerts.map((a, i) => {
					return (
						close == true
						? <Alert
							alertItem={alerts[i]}
							alerts={alerts}
							index={i}
							key={i}
							close={close}
							setClose={setClose}
							setAlerts={setAlerts}
							// alertsClose1={btnConfirm}
							btnClose={btnClose}
							// btnConfirm={btnConfirm}
							// option1={hidden}
							/>
						: null						
					)
				})
			}
			{/* {
				close == true ? <alerts1 alerts={alerts} close={close} setClose={setClose} alertsClose1={btnConfirm} btnClose={btnClose} btnConfirm={btnConfirm} option1={hidden} /> : null
			}
			{
				close == true ? <alerts2 alerts={alerts} close={close} setClose={setClose} alertsClose2={btnConfirm} btnClose2={btnClose} option2={hidden} /> : null
			}
			{
				close == true ? <alerts3 alerts={alerts} close={close} setClose={setClose} alertsClose3={btnConfirm} btnClose3={btnClose} option3={hidden} /> : null
			}
			{
				close == true ? <alerts1 alerts={alerts} close={close} setClose={setClose} alertsClose1={btnConfirm} btnClose={btnClose} btnConfirm={btnConfirm} option1={hidden} /> : null
			}
			{
				close == true ? <alerts2 alerts={alerts} close={close} setClose={setClose} alertsClose2={btnConfirm} btnClose2={btnClose} option2={hidden} /> : null
			} */}
		</div>
	);
}

// 공통
function Alert(props) {
	// console.log(props.alerts)

	return (
		<div className='alert'>
			<span className={'ico' + (parseInt(props.alertItem.Code) + 1)}></span>
			<p>{props.alertItem.Msg}</p>

			<div className='btn_area'>
				<button type='button' className='btn_confirm'
				// onClick={props.btnConfirm}
				onClick={
					// props.btnConfirm
					// AI 활용
					() => {
						let confirm = [...props.alerts];
						confirm.splice(props.index, 1);
						props.setAlerts(confirm);
					}
				}
				>확인</button>
				<button type='button' className='btn_close'
				onClick={
					// props.btnClose
					() => {
						console.log(props.btnClose(props.index))
					}
				}>닫기</button>
			</div>
		</div>
	)
}

// 에러
// function alerts1(props) {
// 	return (
// 		<div className={`alerts ${props.option1}`}>
// 			<span className='ico1'></span>
// 			<p>{props.alerts[0].Msg}</p>

// 			<div className='btn_area'>
// 				<button type='button' className='btn_confirm'
// 				onClick={props.btnConfirm}
// 				>확인</button>
// 				<button type='button' className='btn_close'
// 				onClick={props.btnClose}>닫기</button>
// 			</div>
// 		</div>
// 	)
// }

// 경고
// function alerts2(props) {
// 	return (
// 		<div className={`alerts ${props.option2}`}>
// 			<span className='ico2'></span>
// 			<p>{props.alerts[1].Msg}</p>

// 			<div className='btn_area'>
// 				<button type='button' className='btn_confirm'
// 				onClick={
// 					(e)=>{
// 						e.stopPropagation();
// 						props.alertsClose2();
// 					}					
// 				}
// 				>확인</button>
// 				<button type='button' className='btn_close'
// 				onClick={
// 					(e) => {
// 						e.stopPropagation();
// 						props.btnClose2();
// 					}
// 				}>닫기</button>
// 			</div>
// 		</div>
// 	)
// }


// 알림
// function alerts3(props) {
// 	return (
// 		<div className={`alerts ${props.option3}`}>
// 			<span className='ico3'></span>
// 			<p>{props.alerts[2].Msg}</p>

// 			<div className='btn_area'>
// 				<button type='button' className='btn_confirm'
// 				onClick={
// 					(e)=>{
// 						e.stopPropagation();
// 						props.alertsClose3();
// 					}					
// 				}
// 				>확인</button>
// 				<button type='button' className='btn_close'
// 				onClick={
// 					(e) => {
// 						e.stopPropagation();
// 						props.btnClose3();
// 					}
// 				}>닫기</button>
// 			</div>
// 		</div>
// 	)
// }

export default App;
