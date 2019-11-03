import React, { useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  canvas: {
    border: '1px solid #000',
  },
});

export default function SnakeGame(): JSX.Element {
  const classes = useStyles();

  const canvasRef = useRef<null | HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.width = 400;
      canvasRef.current.height = 400;

      const ctx = canvasRef.current.getContext('2d');
      let score = 0;

      interface Snake {
        x: number;
        y: number;
        dx: number;
        dy: number;
        cells: { x: number; y: number }[];
        maxCells: number;
      }

      const snake: Snake = {
        x: 160,
        y: 160,
        dx: 16,
        dy: 0,
        cells: [],
        maxCells: 1,
      };

      const apple = {
        x: 320,
        y: 320,
      };

      const getRandomInt = (
        min: number, max: number,
      ): number => Math.floor(Math.random() * (max - min)) + min;

      const main = (): void => {
        if (ctx && canvasRef.current) {
          ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
          snake.x += snake.dx;
          snake.y += snake.dy;

          if (snake.x < 0) {
            snake.x = canvasRef.current.width - 16;
          } else if (snake.x >= canvasRef.current.width) {
            snake.x = 0;
          }

          if (snake.y < 0) {
            snake.y = canvasRef.current.height - 16;
          } else if (snake.y >= canvasRef.current.height) {
            snake.y = 0;
          }

          snake.cells.unshift({ x: snake.x, y: snake.y });
          if (snake.cells.length > snake.maxCells) {
            snake.cells.pop();
          }

          ctx.fillStyle = 'red';
          ctx.fillRect(apple.x, apple.y, 15, 15);

          ctx.fillStyle = 'green';

          for (let i = 0; i < snake.cells.length; i += 1) {
            ctx.beginPath();
            ctx.fillRect(snake.cells[i].x, snake.cells[i].y, 15, 15);
            ctx.fill();

            const cell = snake.cells[0];
            if (cell.x === apple.x && cell.y === apple.y) {
              snake.maxCells += 1;
              score += 1;
              apple.x = getRandomInt(0, 25) * 16;
              apple.y = getRandomInt(0, 25) * 16;
            }

            for (let j = i + 1; j < snake.cells.length; j += 1) {
              const snakeCell = snake.cells[i];
              const snakeCell2 = snake.cells[j];
              if (snakeCell.x === snakeCell2.x && snakeCell.y === snakeCell2.y) {
                snake.x = 160;
                snake.y = 160;
                snake.cells = [];
                snake.maxCells = 1;

                alert(`Your snake ate it self: ${score}`);
                score = 0;
              }
            }
          }

          ctx.font = '10px Arial';
          ctx.fillText(`Score:  ${score}`, 10, 30);
        }
      };

      document.addEventListener('keydown', (e): void => {
        if (e.keyCode === 37 && snake.dx === 0) {
          snake.dx = -16;
          snake.dy = 0;
        }
        if (e.keyCode === 39 && snake.dx === 0) {
          snake.dx = 16;
          snake.dy = 0;
        }
        if (e.keyCode === 40 && snake.dy === 0) {
          snake.dx = 0;
          snake.dy = 16;
        }
        if (e.keyCode === 38 && snake.dy === 0) {
          snake.dx = 0;
          snake.dy = -16;
        }
      });

      setInterval(main, 60);
    }
  }, [canvasRef]);

  return (
    <canvas ref={canvasRef} className={classes.canvas} />
  );
}
