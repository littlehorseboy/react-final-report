import React, { useRef, useEffect } from 'react';
import random from 'lodash/random';
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
    const speed = 19;
    const canvasWidth = 25;
    const canvasHeight = 25;

    let score = 0;

    if (canvasRef.current) {
      canvasRef.current.width = speed * canvasWidth;
      canvasRef.current.height = speed * canvasHeight;

      const ctx = canvasRef.current.getContext('2d');

      interface Snake {
        x: number;
        y: number;
        dx: number;
        dy: number;
        cells: { x: number; y: number }[];
        maxCells: number;
      }

      const snake: Snake = {
        x: speed * 10,
        y: speed * 10,
        dx: speed,
        dy: 0,
        cells: [],
        maxCells: 1,
      };

      const apple = {
        x: speed * 20,
        y: speed * 20,
      };

      const main = (): void => {
        if (ctx && canvasRef.current) {
          ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
          snake.x += snake.dx;
          snake.y += snake.dy;

          if (snake.x < 0) {
            snake.x = canvasRef.current.width - speed;
          } else if (snake.x >= canvasRef.current.width) {
            snake.x = 0;
          }

          if (snake.y < 0) {
            snake.y = canvasRef.current.height - speed;
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
              apple.x = random(0, canvasWidth - 1) * speed;
              apple.y = random(0, canvasHeight - 1) * speed;
            }

            for (let j = i + 1; j < snake.cells.length; j += 1) {
              const snakeCell = snake.cells[i];
              const snakeCell2 = snake.cells[j];
              if (snakeCell.x === snakeCell2.x && snakeCell.y === snakeCell2.y) {
                snake.x = speed * 10;
                snake.y = speed * 10;
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
          snake.dx = -speed;
          snake.dy = 0;
        }
        if (e.keyCode === 39 && snake.dx === 0) {
          snake.dx = speed;
          snake.dy = 0;
        }
        if (e.keyCode === 40 && snake.dy === 0) {
          snake.dx = 0;
          snake.dy = speed;
        }
        if (e.keyCode === 38 && snake.dy === 0) {
          snake.dx = 0;
          snake.dy = -speed;
        }
      });

      setInterval(main, 60);
    }
  }, [canvasRef]);

  return (
    <canvas ref={canvasRef} className={classes.canvas} />
  );
}
