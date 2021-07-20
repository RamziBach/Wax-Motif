import { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import styles from './scene.module.css';

const GravityScene = () => {
  const scene = useRef(null);

  useEffect(() => {
    var Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Composites = Matter.Composites,
      Common = Matter.Common,
      // MouseConstraint = Matter.MouseConstraint,
      // Mouse = Matter.Mouse,
      Composite = Matter.Composite,
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

    var rest = 0.8;

    // add bodies
    var stack = Composites.stack(280, 20, 4, 4, 0, 0, function (x, y) {
      return Bodies.circle(x, y, 35, {
        restitution: rest,
        friction: 0.1,
        render: {
          fillStyle: 'purple',
          sprite: {
            texture: '/waxcoin.svg',
            xScale: 0.452,
            yScale: 0.452,
          },
        },
      });
    });

    Composite.add(world, stack);

    Composite.add(world, [
      // walls
      // top
      Bodies.rectangle(400, 0, 800, 50, {
        isStatic: true,
        render: {
          fillStyle: 'none',
          strokeStyle: 'none',
          opacity: '0',
        },
      }),
      // bottom
      Bodies.rectangle(400, 400, 800, 50, {
        isStatic: true,
        render: {
          fillStyle: 'none',
          strokeStyle: 'none',
          opacity: '0',
        },
      }),
      Bodies.rectangle(800, 300, 50, 800, {
        isStatic: true,
        render: {
          fillStyle: 'none',
          strokeStyle: 'none',
          opacity: '0',
        },
      }),
      Bodies.rectangle(0, 300, 50, 800, {
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

    // Composite.add(world, mouseConstraint);

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

export default GravityScene;
