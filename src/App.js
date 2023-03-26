import logo from "./logo.svg";
import "./App.css";
import React, { useRef, useState } from "react";
import Modal from "./components/Modal";
import MyInput from "./components/MyInput";

// // class Foo extends React.Component {
// //   componentDidMount() {
// //     console.log("Foo componentDidMount", this.props.children);
// //   }
// //   componentWillUnmount() {
// //     console.log("Foo componentWillUnmount");
// //   }

// //   static getDerivedStateFromProps(nextProps, prevProps) {
// //     console.log("Foo getDerivedStateFromProps", nextProps, prevProps);
// //     return {};
// //   }

// //   render() {
// //     console.log("Foo render", this.props.children);
// //     return <p>Foo</p>;
// //   }
// // }
// // class Person extends React.PureComponent {
// //   render() {
// //     console.log("Person render");
// //     const { name, age } = this.props;
// //     return (
// //       <ul>
// //         {name} / {age}
// //       </ul>
// //     );
// //   }
// // }
// const Person = React.memo(({ name, age }) => {
//   console.log("Person render");
//   return (
//     <ul>
//       {name} / {age}
//     </ul>
//   );
// });

// // class App extends React.Component {
// //   state = {
// //     count: 0,
// //     text: "",
// //     persons: [
// //       { id: 1, name: "Mark", age: 37 },
// //       { id: 2, name: "Hanna", age: 26 },
// //     ],
// //   };

// //   // componentDidMount() {
// //   //   setInterval(() => {
// //   //     this.setState({ count: this.state.count + 1 });
// //   //   }, 1000);
// //   // }
// //   // render() {
// //   //   if (this.state.count % 2 === 0) {
// //   //     return (
// //   //       <div>
// //   //         <Foo />
// //   //       </div>
// //   //     );
// //   //   }

// //   //   return (
// //   //     <span>
// //   //       <Foo />
// //   //     </span>
// //   //   );
// //   // }

// //   // render() {
// //   //   if (this.state.count % 2 === 0) {
// //   //     return <div className="before" title="stuff" />;
// //   //   }

// //   //   return <div className="after" title="stuff" />;
// //   // }

// //   // render() {
// //   //   if (this.state.count % 2 === 0) {
// //   //     return <div style={{ color: "red", fontWeight: "bold" }} />;
// //   //   }

// //   //   return <div style={{ color: "green", fontWeight: "bold" }} />;
// //   // }

// //   //   render() {
// //   //     if (this.state.count % 2 === 0) {
// //   //       return <Foo name="Mark" />;
// //   //     }

// //   //     return <Foo name="Hanna" />;
// //   //   }
// //   // }

// //   // render() {
// //   //   if (this.state.count % 2 === 0) {
// //   //     return (
// //   //       <ul>
// //   //         <Foo key="2">second</Foo>
// //   //         <Foo key="3">third</Foo>
// //   //       </ul>
// //   //     );
// //   //   }

// //   //   return (
// //   //     <ul>
// //   //       <Foo key="1">first</Foo>
// //   //       <Foo key="2">second</Foo>
// //   //       <Foo key="3">third</Foo>
// //   //     </ul>
// //   //   );
// //   // }
// //   render() {
// //     const { text, persons } = this.state;
// //     return (
// //       <div>
// //         <input type="text" value={text} onChange={this._change} />
// //         <ul>
// //           {persons.map((person) => {
// //             return (
// //               <Person
// //                 {...person}
// //                 key={person.id}
// //                 onClick={this.toPersonClick}
// //               />
// //             );
// //           })}
// //         </ul>
// //       </div>
// //     );
// //   }

// //   _change = (e) => {
// //     this.setState({
// //       ...this.state,
// //       text: e.target.value,
// //     });
// //   };

// //   toPersonClick = () => {};
// // }

// function App() {
//   const [state, setState] = React.useState({
//     text: "",
//     persons: [
//       { id: 1, name: "Mark", age: 37 },
//       { id: 2, name: "Hanna", age: 26 },
//     ],
//   });
//   const toPersonClick = React.useCallback(() => {}, []);
//   const { text, persons } = state;
//   return (
//     <div>
//       <input type="text" value={text} onChange={change} />
//       <ul>
//         {persons.map((person) => {
//           return <Person {...person} key={person.id} onClick={toPersonClick} />;
//         })}
//       </ul>
//     </div>
//   );
//   function change(e) {
//     setState({
//       ...state,
//       text: e.target.value,
//     });
//   }
// }

// function App() {
//   const [visible, setVisible] = useState(false);
//   const open = () => {
//     setVisible(true);
//   };
//   const close = () => {
//     setVisible(false);
//   };
//   return (
//     <div>
//       <button onClick={open}>open</button>
//       {visible && (
//         <Modal>
//           <div
//             style={{
//               width: "100vw",
//               height: "100vh",
//               background: "rgba(0, 0, 0, 0.5)",
//             }}
//             onClick={close}
//           >
//             hello
//           </div>
//         </Modal>
//       )}
//     </div>
//   );
// }

function App() {
  const MyInputRef = useRef();

  const click = () => {
    console.log(MyInputRef.current.value);
  };

  return (
    <div>
      <MyInput ref={MyInputRef} />
      <button onClick={click}>send</button>
    </div>
  );
}

export default App;
