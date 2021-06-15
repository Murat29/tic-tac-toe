class GameLogic {
  constructor() {
    this.numberMoves = 0;
    this.walkValue = 'o';
    this.field = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    this.victoriousPositions = [
      [
        [0, 0],
        [0, 1],
        [0, 2],
      ],
      [
        [1, 0],
        [1, 1],
        [1, 2],
      ],
      [
        [2, 0],
        [2, 1],
        [2, 2],
      ],

      [
        [0, 0],
        [1, 0],
        [2, 0],
      ],
      [
        [0, 1],
        [1, 1],
        [2, 1],
      ],
      [
        [0, 2],
        [1, 2],
        [2, 2],
      ],

      [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      [
        [2, 0],
        [1, 1],
        [0, 2],
      ],
    ];
  }

  getField() {
    return this.field;
  }

  setisPlayCrosses(isPlayCrosses) {
    this.walkValue = isPlayCrosses ? 'x' : 'o';
  }

  resetField() {
    this.numberMoves = 0;
    this.field = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  }

  checkWinAndDraw() {
    this.numberMoves++;
    // проверяем есть ли победитель
    for (let i = 0; i < 3; i++) {
      if (
        this.field[i][0] &&
        this.field[i][0] === this.field[i][1] &&
        this.field[i][0] === this.field[i][2]
      ) {
        return this.field[i][0];
      }

      if (
        this.field[0][i] &&
        this.field[0][i] === this.field[1][i] &&
        this.field[0][i] === this.field[2][i]
      ) {
        return this.field[0][i];
      }
    }
    if (
      this.field[0][0] &&
      this.field[0][0] === this.field[1][1] &&
      this.field[0][0] === this.field[2][2]
    ) {
      return this.field[0][0];
    }
    if (
      this.field[2][0] &&
      this.field[2][0] === this.field[1][1] &&
      this.field[2][0] === this.field[0][2]
    ) {
      return this.field[2][0];
    }
    // проверка на ничью
    console.log(this.numberMoves);
    if (this.numberMoves >= 9) return 'draw';

    return null;
  }

  manMakeMove(i, j) {
    this.field[i][j] = this.walkValue === 'x' ? 'o' : 'x';
  }

  makeMove() {
    const possibleWinMan = [];
    // ищем выиграшный ход
    for (let i = 0; i < this.victoriousPositions.length; i++) {
      let countComputer = 0;
      let countMan = 0;
      for (let j = 0; j < 3; j++) {
        const [a, b] = this.victoriousPositions[i][j];
        if (this.field[a][b]) {
          if (this.field[a][b] === this.walkValue) countComputer++;
          else countMan++;
        }
      }
      if (countComputer === 2) {
        for (let j = 0; j < 3; j++) {
          const [a, b] = this.victoriousPositions[i][j];
          if (!this.field[a][b]) {
            this.field[a][b] = this.walkValue;
            return;
          }
        }
      }
      // сохраняем возможные выиграши человека, на случай если компьютер не может выиграть
      if (countMan === 2) possibleWinMan.push(i);
    }
    // делаем ход, мешающий человеку выиграть (если есть)
    for (let i = 0; i < possibleWinMan.length; i++) {
      for (let j = 0; j < 3; j++) {
        const [a, b] = this.victoriousPositions[possibleWinMan[i]][j];
        if (!this.field[a][b]) {
          this.field[a][b] = this.walkValue;
          return;
        }
      }
    }
    // случайный ход
    for (let i = this.getRandomNumber(0, 2); ; i++) {
      for (let j = this.getRandomNumber(0, 2); j < 3; j++) {
        if (!this.field[i % 3][j]) {
          this.field[i % 3][j] = this.walkValue;
          return;
        }
      }
    }
  }

  getRandomNumber(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }
}

const gameLogic = new GameLogic();
export default gameLogic;
