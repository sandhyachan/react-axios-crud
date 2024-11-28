# Alumni Database Management App

A simple React application that allows for CRUD (Create, Read, Update, Delete) operations on alumni data, using Axios to interact with the mock API (`jsonplaceholder.typicode.com/users`). The app provides a clean and responsive UI to manage alumni records.

## Features

- **Display Alumni Data**: Fetch and display a list of alumni from the mock API.
- **Add New Alumni**: Add new alumni records with all relevant information (Personal, Address, and Company details).
- **Edit Alumni**: Edit an existing alumni record.
- **Delete Alumni**: Remove an alumni record from the list.
- **Unique IDs for New Entries**: Automatically generate unique IDs for new alumni (since the mock API doesn’t provide persistent data).

## Technologies Used

- **React**: For building the user interface.
- **Axios**: For making HTTP requests to the mock API.
- **Bootstrap**: For responsive design and layout.
- **React PropTypes**: For type-checking props.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/sandhyachan/react-axios-crud.git
    ```

2. **Install dependencies**:
    ```bash
    cd reactaxioscrud
    npm install
    ```

3. **Run the development server**:
    ```bash
    npm run dev
    ```

    Open [http://localhost:5173](http://localhost:5173) in your browser.


## License
This project is licensed under the MIT License - see the LICENSE file for details