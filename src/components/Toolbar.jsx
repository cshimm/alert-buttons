import {AlertButton} from "./AlertButton";

export const Toolbar = () => {
    const buttonData = [
        {message: '1!', children: 'Download File 1'},
        {message: '2!', children: 'Download File 2'},
        {message: '3!', children: 'Download File 3'},
        {message: '4!', children: 'Download File 4'},
        {message: '5!', children: 'Download File 5'},
    ]
    return <>
        {
            buttonData.map(button => <AlertButton message={button.message} children={button.children}/>)
        }
    </>
}
