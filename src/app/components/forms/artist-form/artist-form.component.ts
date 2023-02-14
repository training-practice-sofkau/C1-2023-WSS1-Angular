import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IArtist } from 'src/app/models/artist.interface';
import { ArtistService } from 'src/app/services/artist-services/artist.service';

@Component({
  selector: 'app-artist-form',
  templateUrl: './artist-form.component.html',
  styleUrls: ['./artist-form.component.scss']
})
export class ArtistFormComponent implements OnInit {
  saveArtist: FormGroup = new FormGroup({});
  Id: string | null = '';
  updArtist: IArtist={
    artistIDDTO: '',
    nameDTO: '',
    countryDTO: '',
    enterpriseDTO: '',
    debutDateDTO: null,
    typeDTO: ''
  }
  selected: string = '';
  hiddeCreateButton: boolean = false;
  hiddeUpdateButton: boolean = false;

  constructor(private builder: FormBuilder,
    private service: ArtistService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=> {
      this.Id = params.get("id");
      console.log(this.Id);
    });
    console.log(this.Id);
    if(this.Id != null)
    {
      this.hiddeUpdateButton = true;
      this.service.getById(this.Id).subscribe((artist) =>{
      this.updArtist = artist;
      this.selected = this.updArtist.typeDTO;
      console.log(this.selected);
      console.log(this.updArtist);
    });}else{
      console.log(this.selected);
      console.log(this.updArtist);
      this.hiddeCreateButton = true;
    }
    this.saveArtist = this.builder.group(
      {
        artistIDDTO: '',
        nameDTO: '',
        countryDTO: '',
        enterpriseDTO: '',
        debutDateDTO: '',
        typeDTO: ''
      }
    );
    this.saveArtist.valueChanges.subscribe((change) => console.log(change));
    
    
    
    

  }

  onSubmit(): void {
    this.service.postArtist(this.saveArtist.value).subscribe((answer) => {
      alert("Artist was created successfully")
      console.log(answer)
    });
  }
  
  updateArtist(): void {
    this.service.putArtist(this.saveArtist.value).subscribe((answer) => {
      alert("Artist was update successfully")
      console.log(answer)
    });
  }


}
