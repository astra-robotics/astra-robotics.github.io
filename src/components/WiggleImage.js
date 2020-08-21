import React from 'react';
import {useSpring, animated} from 'react-spring'

export default function WiggleImage(props) {
    const [wiggle, set] = useSpring(() => {
        return {
          transform: "scale(1)",
          config: { friction: 1, tension: 500, mass: 1 }
        };
      });
    return (
        <div>
            <animated.div
            style={wiggle}
            >
                <img 
                src={props.src} 
                style={props.style} 
                alt={props.alt}
                onMouseEnter={() => {
                    set({ transform: "scale(1.004)" });
                }}
                onMouseLeave={() => {
                    set({ transform: "scale(1)" });
                }}
                />
            </animated.div>
        </div>
    );
}