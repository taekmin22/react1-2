// 함수형 컴포넌트 선언, 
// 변수를 통해서 함수형 컴포넌트 선언, 
// arrow func 사용

// function Hello(props) {
//     return(
//         <h1>Hello! {props.title}~!</h1>
//     );
// }

// const Hello = function(props) {
//     return (
//         <h1>Hello! {props.title}~!</h1>
//     );
// }

//arrow function
const Hello = (props) => {
    return (
        <h1>Hello! {props.title}~!</h1>
    );
}

export default Hello;