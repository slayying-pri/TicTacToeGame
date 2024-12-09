import { Component } from '@angular/core';

@Component({
  selector: 'app-tictactoegame',
  templateUrl: './tictactoegame.component.html',
  styleUrls: ['./tictactoegame.component.css']
})
export class TictactoegameComponent 
{
  //players
  playerA:Player=new Player("PlayerA","X",false,true);//playerA
  playerB:Player=new Player("PlayerB","O",false,false);//playerB

  //grid
  cells:string[]=Array(10).fill(null);
  //game status
  gameStatus:string="gameActive";

  //  winningCombination: number[] = []; 
  winningCombination: number[] = []; 

  //moves
  allMoves:string[]=[];

  updatePlayerName(key:string)
  {
    if(key==='A'){this.playerA.isEditing=!this.playerA.isEditing;}
    if(key==='B'){this.playerB.isEditing=!this.playerB.isEditing;}
  }

  makeMove(index:number)
  {
      if(this.cells[index]!=null){return;}
      //identify the player
      const currentPlayer=this.playerA.isTurn?this.playerA:this.playerB;
      this.cells[index]=currentPlayer.symbol;
      
      this.allMoves.push(currentPlayer.name+" plays "+currentPlayer.symbol +" on "+index);

      //check game state
      //win lose draw
      this.checkGameState();
      //flip the turn
      if(this.gameStatus==='gameActive')
      {
        this.playerA.isTurn = !this.playerA.isTurn;
        this.playerB.isTurn = !this.playerB.isTurn;
      }
  }

  checkGameState()
  {
    const currentPlayer=this.playerA.isTurn?this.playerA:this.playerB;
    let gameState:string;
    const winningCombinations = [
      [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
      [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
      [1, 5, 9], [3, 5, 7]            // diagonals
    ];
    //checking win
    for(let comb of winningCombinations)
    {  
      let [a,b,c]=comb;
      if(this.cells[a]===currentPlayer.symbol
        && this.cells[b]===currentPlayer.symbol
        && this.cells[c]===currentPlayer.symbol)
      {
        this.gameStatus=currentPlayer.name+"  WIN!!!";
        this.winningCombination=comb;
        return;
      }
    }

 // Check for draw
    let isDraw = true;
    for (let i = 1; i < 10; i++) {
      if (this.cells[i] === null) {
        isDraw = false;
        break;
      }
    }

    if (isDraw) {
      this.gameStatus = "GAME DRAW!!!";
    }
}

}

class Player {
  name: string;
  symbol: string;
  isEditing: boolean;
  isTurn:boolean;

  constructor(playerName: string, playerSymbol: string, playerIsEditing: boolean,playerIsTurn:boolean) 
  {
    this.name = playerName;
    this.symbol = playerSymbol;
    this.isEditing = playerIsEditing;
    this.isTurn=playerIsTurn;
  }
}























/*
<h1 class="heading">TIC TAC TOE!!</h1>

<div class="playerpanel">
    <div class="player">
        <input type="text" [(ngModel)]="playerAName" class="player-input"  [readOnly]="!isEditingA"/>
        <div> 
        <button class="edit-button" (click)="updatePlayerName('A')">{{isEditingA?'save':'edit'}}</button>
        <button class="edit-button">X</button>
        <button *ngIf="currentTurn === 'X'" class="btn btn-success btn-circle btn-sm">TURN</button>
        </div>
    </div>
    <div class="player">
        <input type="text" [(ngModel)]="playerBName" class="player-input" [readOnly]="!isEditingB"/>
        <div>
        <button class="edit-button" (click)="updatePlayerName('B')">{{isEditingB?'save':'edit'}}</button>
        <button class="edit-button">O</button>
        <button *ngIf="currentTurn === 'O'" class="btn btn-success btn-circle btn-sm">TURN</button>
       </div>
    </div>
</div>

<div class="game">
    <div class="d-flex flex-column">
    <div class="d-flex">
        <span class="square" (click)="moveMade(1)">{{cellValues[1]}}</span>
        <span class="square" (click)="moveMade(2)">{{cellValues[2]}}</span>
        <span class="square" (click)="moveMade(3)">{{cellValues[3]}}</span>
    </div>
    <div class="d-flex">
        <span class="square" (click)="moveMade(4)">{{cellValues[4]}}</span>
        <span class="square" (click)="moveMade(5)">{{cellValues[5]}}</span>
        <span class="square" (click)="moveMade(6)">{{cellValues[6]}}</span>
    </div>
    <div class="d-flex">
        <span class="square" (click)="moveMade(7)">{{cellValues[7]}}</span>
        <span class="square" (click)="moveMade(8)">{{cellValues[8]}}</span>
        <span class="square" (click)="moveMade(9)">{{cellValues[9]}}</span>
    </div>
    </div>
</div>

<div class="movesorder">
    <input class="movetext" type="text" readonly placeholder="moves"/>
</div>
*/