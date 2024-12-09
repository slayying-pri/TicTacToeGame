import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointemnt-list',
  templateUrl: './appointemnt-list.component.html',
  styleUrls: ['./appointemnt-list.component.css']
})
export class AppointemntListComponent implements OnInit
{
   ngOnInit(): void 
   {
      let savedAppointments=localStorage.getItem("appointments");
      this.appointments=savedAppointments?JSON.parse(savedAppointments):[];
    } 
   appointments:Appointment[]=[];
   newAppointmentTitle:string="";
   newAppointmentDate:Date=new Date();

   addAppointment()
   {
    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate)
      {
        let newAppointment:Appointment=
        {
          id:Date.now(),
          title:this.newAppointmentTitle,
          date:this.newAppointmentDate
        }

        this.appointments.push(newAppointment);

        this.updateLocalStorage();

        this.newAppointmentTitle="";
        this.newAppointmentDate=new Date();
      }
   }

   delAppointment(index:number)
   {
      console.log(index);
      this.appointments.splice(index,1);
   }

   updateLocalStorage()
   {
      localStorage.setItem("appointments",JSON.stringify(this.appointments));
   }
  }
