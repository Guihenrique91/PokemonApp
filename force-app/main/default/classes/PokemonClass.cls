public with sharing class PokemonClass {
   @AuraEnabled
   public static List<Pokemon__c> getPokemons(String seacrchWord){
    
    if(seacrchWord != ''){
        String key = '%' + seacrchWord + '%';
        List<Pokemon__c> pokemonSearchList = [SELECT Id, Name,Height__c,Weight__c,Images__c,Trainer__r.FirstName 
        FROM Pokemon__c
        WHERE Name LIKE :key];
        return pokemonSearchList;
    }else {
     List<Pokemon__c> pokemonList = [SELECT Id, Name,Height__c,Weight__c,Images__c,Trainer__r.FirstName 
                                                FROM Pokemon__c ];
        if (!pokemonList.isEmpty()){
            return  pokemonList;
        }

        return NULL;       
    }
    

   }
}