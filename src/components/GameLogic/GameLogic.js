class GameLogic {
  constructor() {
    this.numberMoves = 0;
    this.field = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  }

  getField() {
    return this.field;
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
    if (this.numberMoves === 9) return 'draw';

    return null;
  }
}

const gameLogic = new GameLogic();
export default gameLogic;
