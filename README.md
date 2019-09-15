# # Juice Order Lightning App Using MateriallizeCSS and Sweet Alert

This Is Simple Lightning Application which is used for taking juice orders. there is already one project available on trailhead [Lemonade Stand](https://trailhead.salesforce.com/en/content/learn/projects/lemonade-stand-workshop) which they have created without using code, i have created application which use code as well as external javascript libraries ( MateriallizeCSS and Sweetalert)
yment for notes on how to deploy the project on a live system.

### Installing

A step by step instruction that you can follow and build your own app which can take order its for juice you can build for ice cream , Coffee and other related stuff, lets start : - 

You need basic Knowledge of salesforce .

Login To Your Developer Org.

```
Goto Setup -> Search Apps -> Create App -> Name Your Application "Lemonade Stand"
```
After Creating App we need to create Custom Object

```
Create Custom Object with name "Drinks Order" 
Choose Auto Number so it will work as order ID For you.
```

Once you have created Custom object now we want to create field

```
1. Flavour : - Create One Field with Name Flavour ( You can choose picklist and give flavour names)
2. Size : - Here we will enter size details (Small / Medium / Large)
3. Price : - Here we will Add Price.
```

## Coding Side ( Lightning Component )

Now Before we move to coding part first let's upload our external library ( js and css files to static resource )
```
1. Goto Setup -> Static resource -> Upload Your Files in my case i have used MateriallizCSS and Sweet Alert so i will upload 4 files and name it materialcss and materialjs and for sweet alert sweetalertcss and sweetalertjs. Remember the name later you need to add these files to lightning app using these names. 

### Coding Part

Now Open Developer Console and create one lightning Application

Once you have created lightning app we need to add our External js and css to our application so we will use these syntax
```
<aura:application >
	 <ltng:require styles="{!$Resource.materialcss}" />
     <ltng:require scripts="{!$Resource.materialjs}" />
     <ltng:require styles="{!$Resource.sweetalertcss}" />
     <ltng:require scripts="{!$Resource.sweetalertjs}" />
</aura:application>

```
Now next step create lightning component

```
1.If you know materiallizeCSS you can code your own custom code, if new you can copy paste code from "Lemonade_1.cmp" present present inside aura folder. 
2.Now we need to write js controller i have already written "Lemonade_1Controller" inside aura folder.

## Notice in place of alert('') i have used sweet alert syntax with swal ("Order succesfull"). 

3.CSS is optional if you want to give css you can give css.

```
### Writing Controller Or Apex class to insert record into database which is your object Drink Order.

You call apex class from JS controller which you have created  

```
In Developer console click -> New -> Apex Class -> CreateOrder (" Class Name ") -> And then Copy paste the code of Drinks.cls available inside classes folder. 
```

## Add Dependency of apex conteroller to your Lightning app

```
In Developer console click -> New -> Apex Class -> CreateOrder (" Class Name ") -> And then Copy paste the code of Drinks.cls available inside classes folder. 

```
<aura:application >
	 <ltng:require styles="{!$Resource.materialcss}" />
     <ltng:require scripts="{!$Resource.materialjs}" />
     <ltng:require styles="{!$Resource.sweetalertcss}" />
     <ltng:require scripts="{!$Resource.sweetalertjs}" />
    <aura:dependency resource="c:CreateOrder" /> // class which you have created to insert record in salesforce
</aura:application>
```

## last Step Add your component to lightning app with syntax <c:your component name here/>
```
<aura:application >
	 <ltng:require styles="{!$Resource.materialcss}" />
     <ltng:require scripts="{!$Resource.materialjs}" />
     <ltng:require styles="{!$Resource.sweetalertcss}" />
     <ltng:require scripts="{!$Resource.sweetalertjs}" />
    <aura:dependency resource="c:CreateOrder" />
    <c:Lemonade_1/> // Order Form will be rendered 
</aura:application>
```
## Resources Used 

* [Sweet alert](https://sweetalert2.github.io/) - Sweet alert js library for Pop Ups
* [MateriallizeCSS](https://materializecss.com/) - Front End Framework .

## Support Me

If you love my work please star this project.
and you can also donate me for my work.

* [Donate Me Here](https://imswarnil.com/donate.html) - Buy ME Tea, It Motivates Me to make more projects.

## Additional
* **We Can Use Lightning Design System Too** But I Feel for lemon juice MateriallizeCSS will Be Good, as it look beautiful where Lightning design system looks good for enterprice application.
* **Using External JS library Reduce Speed** Yeah its true, because to load it will take time. according to MVPs we should use Lightning design system.

* **Sweet Alert** its Good alternative of Toast in SDLS.

## Want to know person behind project

* **My Work**  - [My Work](https://imswarnil.com/work.html)
* **Know Me** - ** - [About Me](https://imswarnil.com/about.html)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


