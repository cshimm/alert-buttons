import {AlertButton} from "./AlertButton";

export const Toolbar = () => {
    const buttonData = [
        {message: '1!', children: 'Download File 1'},
        {message: '2!', children: 'Download File 2'},
        {message: '3!', children: 'Download File 3'},
        {message: '4!', children: 'Download File 4'},
        {message: '5!', children: 'Download File 5'},
        // Empty objects to test default values
        {},
        {message:"Empty children"},
        {children: "Empty message"},
    ]
    return <>
        {
            // Message and chidlren prop check for truthy values, if not a default value is passed in.
            buttonData.map(button => <AlertButton message={button.message || "Default message"} children={button.children || "Default children"}/>)
        }
    </>
}
