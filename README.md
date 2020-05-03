
# BytesOfProblems

Hack @ Home project - Web app to do Verilog RTL exercises. 

## Getting Started

You can access the website live on https://saleh99er.github.io/BytesOfProblems/ or run it locally on your machine

Long term domain name is https://bytesofproblems.com (not transitioning now so the website is accessible for now without interruption).

### Installation (Machine local instructions)

Pre-requisites: Python-3

Download/clone/fork the repository in a directory

Open a terminal within that directory and navigate to the docs directory.

Execute the following command

```python3 -m http.server 8001```

This will create a local web server at port 8001. 

Open a web browser and enter in the webpage localhost:8001.

You can now access the website and it's resources offline.

## Interacting with the interface

You can edit each of the problem's modules within the Quill Window, the first black window on the webpage. All changes made will be acted upon once you press the `Compile` button. This will have YosysJS attempt to interpret your verilog module(s). If successful you can generate block diagrams of your module with the `generate diagram` button. To test your module against the solution press the `Test` button. All 3 button responses will be provided at the bottom-most black window. The middle blue window is console output provided directly from yosysjs that isn't working as desired (sorry).

# 

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [YosysJS](http://www.clifford.at/yosys/yosysjs.html) - Verilog framework for RTL synthesis
* [Quill](https://quilljs.com/) - Flexible text editor embedded within HTML page
* [HTML5Up](https://rometools.github.io/rome/) - Starter web page and assets (Stellar template used)

## Authors

Saleh Hassen (sih28@cornell.edu)

* **YosysJS** - *Initial work* - [](http://www.clifford.at/yosys/nogit/YosysJS/snapshot/)

<!-- See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project. -->

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* MLH for hosting this hackathon
