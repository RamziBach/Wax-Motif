import { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import styles from './gravitySceneCoins.module.css';

const Scene = () => {
  const scene = useRef(null);

  useEffect(() => {
    var Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      // MouseConstraint = Matter.MouseConstraint,
      // Mouse = Matter.Mouse,
      World = Matter.World,
      Bodies = Matter.Bodies;

    var engine = Engine.create(),
      world = engine.world;

    // create renderer
    var render = Render.create({
      element: scene.current,
      engine: engine,
      options: {
        width: 800,
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
    var rest = 0.5,
      space = 800 / 5,
      friction = 0.03;

    World.add(world, [
      Bodies.circle(space * 2.5, 0, 35, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/waxcoin.svg',
            xScale: 0.452,
            yScale: 0.452,
          },
        },
      }),
      Bodies.circle(space * 2.5, -1000, 35, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/waxcoin.svg',
            xScale: 0.452,
            yScale: 0.452,
          },
        },
      }),
      Bodies.circle(space * 2.5, -2000, 35, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/waxcoin.svg',
            xScale: 0.452,
            yScale: 0.452,
          },
        },
      }),
      Bodies.circle(space * 2.5, -3000, 35, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/waxcoin.svg',
            xScale: 0.452,
            yScale: 0.452,
          },
        },
      }),
      Bodies.circle(space * 2.5, -4000, 35, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/waxcoin.svg',
            xScale: 0.452,
            yScale: 0.452,
          },
        },
      }),
      Bodies.circle(space * 2.5, -5000, 35, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/waxcoin.svg',
            xScale: 0.452,
            yScale: 0.452,
          },
        },
      }),
      Bodies.circle(space * 2.5, -6000, 35, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/waxcoin.svg',
            xScale: 0.452,
            yScale: 0.452,
          },
        },
      }),
      Bodies.circle(space * 2.5, -7000, 35, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/waxcoin.svg',
            xScale: 0.452,
            yScale: 0.452,
          },
        },
      }),
      Bodies.circle(space * 2.5, -8000, 35, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/waxcoin.svg',
            xScale: 0.452,
            yScale: 0.452,
          },
        },
      }),
      Bodies.circle(space * 2.5, -9000, 35, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/waxcoin.svg',
            xScale: 0.452,
            yScale: 0.452,
          },
        },
      }),
      Bodies.circle(space * 2.5, -10000, 35, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/waxcoin.svg',
            xScale: 0.452,
            yScale: 0.452,
          },
        },
      }),
      Bodies.circle(space * 2.5, -11000, 35, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/waxcoin.svg',
            xScale: 0.452,
            yScale: 0.452,
          },
        },
      }),
      Bodies.circle(space * 2.5, -12000, 35, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/waxcoin.svg',
            xScale: 0.452,
            yScale: 0.452,
          },
        },
      }),
      Bodies.circle(space * 2.5, -13000, 35, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/waxcoin.svg',
            xScale: 0.452,
            yScale: 0.452,
          },
        },
      }),
      Bodies.circle(space * 2.5, -14000, 35, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/waxcoin.svg',
            xScale: 0.452,
            yScale: 0.452,
          },
        },
      }),
      Bodies.circle(space * 2.5, -15000, 35, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/waxcoin.svg',
            xScale: 0.452,
            yScale: 0.452,
          },
        },
      }),
      Bodies.circle(space * 2.5, -16000, 35, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/waxcoin.svg',
            xScale: 0.452,
            yScale: 0.452,
          },
        },
      }),
      Bodies.circle(space * 2.5, -17000, 35, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/waxcoin.svg',
            xScale: 0.452,
            yScale: 0.452,
          },
        },
      }),
      Bodies.circle(space * 2.5, -18000, 35, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/waxcoin.svg',
            xScale: 0.452,
            yScale: 0.452,
          },
        },
      }),
      Bodies.circle(space * 2.5, -19000, 35, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/waxcoin.svg',
            xScale: 0.452,
            yScale: 0.452,
          },
        },
      }),
      Bodies.circle(space * 2.5, -20000, 35, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/waxcoin.svg',
            xScale: 0.452,
            yScale: 0.452,
          },
        },
      }),
      Bodies.circle(space * 2.5, -21000, 35, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/waxcoin.svg',
            xScale: 0.452,
            yScale: 0.452,
          },
        },
      }),
      Bodies.circle(space * 2.5, -22000, 35, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/waxcoin.svg',
            xScale: 0.452,
            yScale: 0.452,
          },
        },
      }),
      Bodies.circle(space * 2.5, -23000, 35, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/waxcoin.svg',
            xScale: 0.452,
            yScale: 0.452,
          },
        },
      }),
      Bodies.circle(space * 2.5, -24000, 35, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/waxcoin.svg',
            xScale: 0.452,
            yScale: 0.452,
          },
        },
      }),
      Bodies.circle(space * 2.5, -25000, 35, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/waxcoin.svg',
            xScale: 0.452,
            yScale: 0.452,
          },
        },
      }),
      Bodies.circle(space * 2.5, -26000, 35, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/waxcoin.svg',
            xScale: 0.452,
            yScale: 0.452,
          },
        },
      }),
      Bodies.circle(space * 2.5, -27000, 35, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/waxcoin.svg',
            xScale: 0.452,
            yScale: 0.452,
          },
        },
      }),
      Bodies.circle(space * 2.5, -28000, 35, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/waxcoin.svg',
            xScale: 0.452,
            yScale: 0.452,
          },
        },
      }),
      Bodies.circle(space * 2.5, -29000, 35, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/waxcoin.svg',
            xScale: 0.452,
            yScale: 0.452,
          },
        },
      }),
      Bodies.circle(space * 2.5, -30000, 35, {
        density: 0.0005,
        frictionAir: friction,
        restitution: rest,
        friction: 0.01,
        render: {
          fillStyle: 'red',
          sprite: {
            texture: '/waxcoin.svg',
            xScale: 0.452,
            yScale: 0.452,
          },
        },
      }),
      // walls
      // top wall
      // Bodies.rectangle(300, 0, 600, 50, {
      //   isStatic: true,
      //   render: { fillStyle: 'none', strokeStyle: 'none', opacity: '0.3' },
      // }),
      Bodies.rectangle(400, 400, 800, 50, {
        isStatic: true,
        render: {
          fillStyle: 'none',
          strokeStyle: 'none',
          opacity: '0',
        },
      }),
      Bodies.rectangle(800, 300, 50, 400, {
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
      Bodies.rectangle(400, 293, 140, 47, {
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

    // World.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    // render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: 800, y: 400 },
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

export default Scene;
