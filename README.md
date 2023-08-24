# Cat Fact Generator

This is a JavaScript application that retrievs random cat facts from an API and render them on a webpage. The application also provides dynamic loading and error messages, adjusting the retrieve interval based on the length of the fetched fact.

## Features

- Fetches cat facts from the [apipheny.io/](https://catfact.ninja/fact).
- Displays the retrieved cat facts in a designated paragraph element.
- handles loading messages to signify data retrieving in progress.
-  adjusts the fetch interval based on the length of the fetched fact.
- catch error handling for failed API requests.

## Usage

1. Clone the repository or download the code files.
2. Open the `index.html` file in a web browser.
3. The webpage will load with a random cat fact displayed. The loading message will appear while the fact is being fetched.
4. If an error occurs while fetching, an error message will be displayed.
5. The fetch interval adjusts based on the length of the fetched fact to allow for a comfortable reading time.



## License

This project is licensed under the [MIT License](LICENSE).
