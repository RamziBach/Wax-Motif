import { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import styles from './scene.module.css';

const GravityScene = ({ xx = 20, columns = 5, rows = 2 }) => {
  const scene = useRef(null);

  useEffect(() => {
    var Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Composites = Matter.Composites,
      Common = Matter.Common,
      // MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      Composite = Matter.Composite,
      Bodies = Matter.Bodies;

    var engine = Engine.create(),
      world = engine.world;

    // create renderer
    var render = Render.create({
      element: scene.current,
      engine: engine,
      options: {
        width: 600,
        height: 400,
        wireframes: false,
        background: 'rgba(0,0,0,0)',
      },
    });

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    var stack = Composites.stack(xx, 20, columns, rows, 0, 0, function (x, y) {
      var sides = Math.round(Common.random(1, 8));

      // triangles can be a little unstable, so avoid until fixed
      sides = sides === 3 ? 4 : sides;

      // round the edges of some bodies
      var chamfer = null;
      if (sides > 2 && Common.random() > 0.7) {
        chamfer = {
          radius: 10,
        };
      }

      switch (Math.round(Common.random(0, 1))) {
        case 0:
          if (Common.random() < 0.8) {
            return Bodies.rectangle(
              x,
              y,
              Common.random(25, 50),
              Common.random(25, 50),
              {
                chamfer: chamfer,
                render: {
                  fillStyle: `hsl(265, 75%, ${Math.floor(
                    Math.random() * 25 + 25
                  )}%)`,
                },
              }
            );
          } else {
            return Bodies.rectangle(
              x,
              y,
              Common.random(80, 120),
              Common.random(25, 30),
              {
                chamfer: chamfer,
                render: {
                  fillStyle: `hsl(265, 75%, ${Math.floor(
                    Math.random() * 25 + 25
                  )}%)`,
                },
              }
            );
          }
        case 1:
          return Bodies.polygon(x, y, sides, Common.random(25, 50), {
            chamfer: chamfer,
            render: {
              fillStyle: `hsl(265, 75%, ${Math.floor(
                Math.random() * 25 + 25
              )}%)`,
            },
          });
      }
    });

    Composite.add(world, stack);

    Composite.add(world, [
      // walls
      // Bodies.rectangle(400, 0, 600, 50, {
      //   isStatic: true,
      //   render: {
      //     fillStyle: 'red',
      //     strokeStyle: 'none',
      //     opacity: '1',
      //   },
      // }),
      Bodies.rectangle(300, 400, 600, 50, {
        isStatic: true,
        render: {
          fillStyle: 'none',
          strokeStyle: 'none',
          opacity: '0',
        },
      }),
      Bodies.rectangle(600, 300, 50, 400, {
        isStatic: true,
        render: {
          fillStyle: 'none',
          strokeStyle: 'none',
          opacity: '0',
        },
      }),
      Bodies.rectangle(0, 300, 50, 400, {
        isStatic: true,
        render: {
          fillStyle: 'none',
          strokeStyle: 'none',
          opacity: '0',
        },
      }),
    ]);

    // add mouse control
    // var mouse = Mouse.create(render.canvas),
    //   mouseConstraint = MouseConstraint.create(engine, {
    //     mouse: mouse,
    //     constraint: {
    //       stiffness: 0.2,
    //       render: {
    //         visible: false,
    //       },
    //     },
    //   });

    // Composite.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    // render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: 600, y: 400 },
    });

    // context for MatterTools.Demo
    return {
      engine: engine,
      runner: runner,
      render: render,
      canvas: render.canvas,
      stop: function () {
        Matter.Render.stop(render);
        Matter.Runner.stop(runner);
      },
    };
  }, []);

  return (
    <div
      className={styles.scene}
      style={{ position: 'absolute', bottom: '-2em' }}
      ref={scene}
    ></div>
  );
};

export default GravityScene;
