({
	create : function(component, event, helper) {
		
        //getting the candidate information
        var Drink = component.get("v.Drink");
        
        //Validation
        if($A.util.isEmpty(Drink.Flavor__c) || $A.util.isUndefined(Drink.Flavor__c)){
             swal("Flavour Is Missing", "Flavour Is Required to order juice", "error");
            return;
        }            
        if($A.util.isEmpty(Drink.Size__c) || $A.util.isUndefined(Drink.Size__c)){
            swal("Size Is Missing", "Please Add Size :- Small / Medium / Large", "error");
            return;
        }
        if($A.util.isEmpty(Drink.Price__c) || $A.util.isUndefined(Drink.Price__c)){
             swal("Price Is Missing", "You Have Not Entered Amount Of Juice", "error");
            return;
        }
              
        //Calling the Apex Function
        var action = component.get("c.PlaceOrder");
        
        //Setting the Apex Parameter
        action.setParams({
            Drink : Drink
        });
        
        //Setting the Callback
        action.setCallback(this,function(a){
            //get the response state
            var state = a.getState();
            
            //check if result is successfull
            if(state == "SUCCESS"){
                //Reset Form
                var newOrder = {'sobjectType': 'Drink_Order__c',
                                    'Flavor__c': '',
                                    'Size__c': '',
                                    'Price__c': ''
                                   };
                //resetting the Values in the form
                component.set("v.Drink",newOrder);
                swal("Juice ordered", "Order is Placed Successfully", "success");
            } else if(state == "ERROR"){
                alert('Error in calling server side action');
            }
        });
        
		//adds the server-side action to the queue        
        $A.enqueueAction(action);

	}
    
})
 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, options);
  });