# React+ReduxToolkit practice project

This is **Redux Toolkit** project .Here is practice multiple feature of redux Toolkit.This is not Designed focused project.Here i am only practice functionality of ReduxToolkit and data fetching .

## Features

- **Counter**: This app have a counter component.i am build a particular slice name **counterSlice** which is  work for increment , decrement,reset and increaseByNumber . in INCREAS5 button it increase 25.because I want to pass data dynamically using payload.decrement ,increment and reset button as well as .

- **extraReducer**:When i want to connect one slice to another slice extraReducer help me . here when i want add a new task then the value of count increase 1 .in this way i connect one slice to another slice by extraReducer . 

- **Todo component**: initially using createAsyncThunk i fetch data from json placholder .when i add new data it will concat the initially state and show bellow the input from . 

- similarly doing here for posts . fetching data from json placholde and show bellow .

- **here i mention again i am just practice some ReduxToolkit feature so it will not eye-catching [just for functionality test]**



## Technologies Used

- React: The component is built using the React library for creating dynamic user interfaces.

- ReduxToolkit: Redux is used for state management to store and manage dynamic state.



## View Live 
[Visit our website](https://651af0348bd3ee103c76d40d--capable-salmiakki-9a9d58.netlify.app/)