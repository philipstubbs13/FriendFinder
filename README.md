# Carpool Buddy

## Table of contents
  * [Demo](#demo)
  * [About this project](#about-this-project)
  * [Getting started](#contribute)
  * [Screenshots](#screenshots)
  * [Technologies used to create app](#technologies-used)
  * [Future code development](#feature-enhancements)
  * [Issues](#issues)

## <a name="demo"></a> Demo


## <a name="about-this-project"></a> About this project


## <a name="contribute"></a> Getting started
To set up this application on your own computer, perform the following steps:
  1. [Clone the repository](#clone-repository)
  2. [Install Node.js](#install-node)
  3. [Install the dependencies](#dependencies)

### <a name="clone-repository"></a> Clone the repository
The first step is to clone the project repository to a local directory on your computer. To clone the repository, run the following commands:
<pre>
  git clone https://github.com/philipstubbs13/FriendFinder.git
  cd Bamazon
</pre>

### <a name="install-node"></a> Install Node.js
<p>If you don't already have Node.js installed on your computer, you can install the latest version here: https://nodejs.org/en/.</p>


#### <a name="structure-of-project"></a> Structure of the project
<p>After you clone the repository, navigate to the project root directory (Bamazon). The project directory structure is set up as follows:</p>
<ul>
  <li> 
    <p><b>BamazonCustomer.js</b>: Bamazon Customer Portal. Running this application displays information for all of the items on sale, including item number, product name, department name, and product price.</p>
    <p>When a customer order is processed, stock quantity and product sales are updated in the database, and the amount that the customer's account is charged is displayed on the screen.</p>
  </li>
  <li>
    <p><b>BamazonManager.js</b>: Bamazon Manager Portal. Running this application displays a list of menu options that store managers can choose from. This application allows managers to view all the products for sale, view products that are low in inventory, add inventory, and add a new product to the store. </p>
  </li>
  <li>
    <p><b>BamazonSupervisor.js</b>: Bamazon Supervisor Portal. Running this application displays a list of menu options that store supervisors can choose from. This application allows supervisors to add a new department to the store by providing information through a series of inquirer prompts.</p>
    <p>This application also allows supervisors to see a summary (in table format) of product sales by department. Total profit is also displayed in the same table. Total profit is equal to department product sales minus department overhead costs. Total profit is stored outside of the database.</p>
  </li>
  <li>
    <p><b>schema.sql</b>: The database schema. The schema is what describes the structure of each table, and the datatypes that each column of the table can contain. For this project, the database includes two tables, a products table and a departments table.</p>
    <ul>
      <li>
        <p>The products table contains information about each product that is sold in the store, including item number/id, product name, department name, price, stock quantity, and product sales.</p>
        <img src="readme_images/products_table.png">
      </li>
      <li>
        <p>The departments table contains information about each department in the store, including deparment number, department name, and overhead costs.</p>
        <img src="readme_images/departments_table.png">
      </li>
    </ul>
    <p>For the Supervisor Portal, the products table and departments table are joined to calculate product sales and total profits for each department.</p>
    <img src="readme_images/department_sales.png">
  </li>
  <li><b>package.json</b>: Lists the project dependencies (third party npm packages) and their version numbers.</li>
  <li><b>.gitignore</b>: Anything listed inside this file will not be tracked by GitHub when code is committed.</li>
  <li><b>package-lock.json</b>: Dependency tree for the project. Lists all the dependencies and their versions.</li>
</ul>

### <a name="dependencies"></a> Install the dependencies
<p>The following npm packages are dependencies to the project. You must install these packages in the project root directory (FriendFinder) to be able to use this application from the command line.</p>
<p>After you clone the repository to a local directory, change directory to the project root directory and run the following command to install the required npm packages:</p>
<pre>npm install</pre>

<p>Version information for each of these packages is available in the package.json file in the project root directory.</p>

## <a name="screenshots"></a> Screenshots


## <a name="technologies-used"></a> Technologies used to build app

  * Node.js (https://nodejs.org/en/)
  * Javascript
  * Express 

## <a name="feature-enhancements"></a> Future code development
<p>Source code will be developed over time to handle new features.</p>
<p>The following is a list of potential feature enhancements:</p>


## <a name ="Issues"></a> Issues
<p>If you find an issue while using the app or have a request, <a href="https://github.com/philipstubbs13/FriendFinder/issues/" target="_blank">log the issue or request here</a>. These issues will be addressed in a future code update.</p>