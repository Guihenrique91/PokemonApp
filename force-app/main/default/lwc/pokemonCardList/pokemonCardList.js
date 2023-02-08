import { LightningElement } from 'lwc';
import getPokemons from '@salesforce/apex/PokemonClass.getPokemons';

export default class PokemonCardList extends LightningElement {

    pokemons;
    error;
    searchWords='';
    isSearchAvaliable =false;

    connectedCallback(){
        this.loadPokemons(this.searchWords);
    }

    handlerSearch(event){
        this.searchWords = event.target.value;
        this.loadPokemons(this.searchWords);
    }

    loadPokemons (searchWords){
        getPokemons({seacrchWord:searchWords})
        .then(result =>{
            this.pokemons = result;
            console.log(" this pokemons: " +JSON.stringify(this.pokemons));
            if(this.pokemons.length > 0){
                this.isSearchAvaliable = false;
            }else{
                this.isSearchAvaliable = true;
            }
        })
        .catch(error =>{
            this.isSearchAvaliable = false;
            this.error = error;
        })
    }

}