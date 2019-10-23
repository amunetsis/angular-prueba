import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service';
import { GitSearch } from '../git-search';
import { GitSearchUser } from '../git-search-user';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {
  searchResults: GitSearch;
  searchUserResult: GitSearchUser;
  searchQuery: string;
  displayQuery: string;

  constructor(private GitSearchService: GitSearchService) { }

  ngOnInit() {
   this.searchQuery = 'pedro'
   this.displayQuery = this.searchQuery;
   this.gitSearchUser();
  }

  gitSearch =()=>{
    this.GitSearchService.gitSearch(this.searchQuery).then((response)=>{
      this.searchResults = response;
      this.displayQuery= this.searchQuery;
      //alert('Total repositories found: '+response.total_count);
    },(error) => {
      alert('Error: '+ error.statusText);
    })
  }

  gitSearchUser =()=>{
    this.GitSearchService.gitSearchUser(this.searchQuery).then((response)=>{
      console.log(response);
      this.searchUserResult = response;
      this.displayQuery= this.searchQuery;
      //alert('Total repositories found: '+response.total_count);
    },(error) => {
      alert('Error: '+ error.statusText);
    })
  }
}
