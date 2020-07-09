import React, { useState, useContext, useEffect } from "react";
import Row from "./row";
import { ThemeContext, LocaleContext, locale } from "./context";

// export default class Greeting extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: "Mary",
//             surname: "Samuel",
//             width: window.innerWidth,
//         }
//         this.handleNameChange = this.handleNameChange.bind(this);
//         this.handleSurnameChange = this.handleSurnameChange.bind(this);
//         this.handleResize = this.handleResize.bind(this);
//     }

//     componentDidMount() {
//         document.title = this.state.name + " " + this.state.surname;
//         window.addEventListener("resize", this.handleResize)
//     }

//     componentDidUpdate(prevProps, prevState) {
//         document.title = this.state.name + " " + this.state.surname;
//     }

//     componentWillUnmount() {
//         window.removeEventListener("resize", this.handleResize)
//     }

//     handleNameChange(e) {
//         this.setState({name: e.target.value});
//     }

//     handleSurnameChange(e) {
//         this.setState({surname: e.target.value});
//     }

//     handleResize(e) {
//         this.setState({width: window.innerWidth});
//     }

//     render() {
//         return (
//             <ThemeContext.Consumer>
//                 {theme => (
//                     <section className={theme}>
//                         <Row label="Name">
//                             <input 
//                                 value={this.state.name} 
//                                 onChange={this.handleNameChange}
//                             />
//                         </Row>
//                         <Row label="Surname">
//                             <input 
//                                 value={this.state.surname} 
//                                 onChange={this.handleSurnameChange}
//                             />
//                         </Row>
//                         <LocaleContext.Consumer>
//                             {locale => (
//                                 <Row label="Language">
//                                     {locale}
//                                 </Row>
//                             )}
//                         </LocaleContext.Consumer>
//                         <Row label="Width">{this.state.width}</Row>
//                     </section>
//                 )}
//             </ThemeContext.Consumer>
//         );
//     }
// };

export default function Greeting(props) {
    const [name, setName] = useState("Mary");
    const [surname, setSurname] = useState("Samuel");
    const theme = useContext(ThemeContext);
    const locale = useContext(LocaleContext);
    const width = useWindowWidth();

    useDocumentTitle(name + " " + surname);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleSurnameChange(e) {
        setSurname(e.target.value);
    }

    return (
        <section className={theme}>
            <Row label="Name">
                <input
                    value={name}
                    onChange={handleNameChange}
                />
            </Row>
            <Row label="Sur Name">
                <input
                    value={surname}
                    onChange={handleSurnameChange}
                />
            </Row>
            <Row label="Language">
                {locale}
            </Row>
            <Row label="Width">{width}</Row>
        </section>
    );
};

const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });
    return width;
}

const useDocumentTitle = (title) => {
    useEffect(() => {
        document.title = title;
    });
}

