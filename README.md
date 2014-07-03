## A Demo Site Project to demonstrate using Scenarioo to test and document a webapplication

This demo is based on the opensource ecommerce platform "broad leaf commerce" and their demo project
See http://www.broadleafcommerce.org for more information about their great ecommerce platform.

This demo is based on their demo forked from 
https://github.com/BroadleafCommerce/DemoSite

### Setup IDE for Demo Site

This section explains how the setup for the demo project is done.
See also [Broadleaf's Getting Started Guide](http://docs.broadleafcommerce.org/current/Getting-Started.html)http://www.broadleafcommerce.com/docs/core/current/getting-started for more detailed informations on hos to setup the demo project in eclipse.


1. I had to install the newest maven version: sudo apt-get install maven

        > sudo apt-get install maven

		> export PATH=/usr/share/maven/bin:$PATH


2. I had to upgrade the m2e maven plugin for eclipse

	using update site for luna 

	http://download.eclipse.org/releases/luna/


3. I had to run the maven build from command line to download all needed dependencies:

	in directory ~/Code/scenarioo-broadleaf-demo/DemoSite

        > mvn install


4. Setup the maven path for demo's build.xml:

	in project ecommerce-website's build.properties

		maven.home=/usr/share/maven


5. Running the eCommerce DemoSite web application (HeatClinic) is done by running following ant commands from build scripts inside the projects:

		sub-project 'site' >> jetty-demo

		sub-project 'admin' >> jetty-demo

(Startup might take some time ... be patient ...)


### The Broadleaf Commerce Demo Site

Original Readme Text from Broadleaf's DemoSite project:

This Maven project is meant to be used as a solid started project for any [Broadleaf Commerce](http://www.broadleafcommerce.org) application. It has many sensible defaults set up along with examples of how a fully functioning eCommerce site based on Broadleaf might work.

One typical way of using this project would be to follow the [Getting Started Guide](http://docs.broadleafcommerce.org/current/Getting-Started.html), which would walk you through using our pre-bundled Eclipse workspace.

However, if you would like to utilize your own workspace or IDE configuration, you may prefer to fork this project. This would give you the added benefit of being able to pull in upstream changes as we work to improve the DemoSite.

> Note: If you are going to fork this project, we recommend basing your work on the `master` branch, and not the develop branch. develop is our ongoing development branch and there are no guarantees of stability on it.


