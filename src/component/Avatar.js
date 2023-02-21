import React from "react";
import { Parts } from './Parts';

const Avatar = ({ body, eyes, hair, clothing1, clothing2, clothing3, mouth, eyebrow, glasses }) => {
    return (
        <div className="avatar">
            <Parts path='body' index={body} zIndex={0} />
            <Parts path='eyes' index={eyes} zIndex={1} />
            <Parts path='hair' index={hair} zIndex={6} />
            <Parts path='clothes/layer_1' index={clothing1} zIndex={2} />
            <Parts path='clothes/layer_2' index={clothing2} zIndex={3} />
            <Parts path='clothes/layer_3' index={clothing3} zIndex={4} />
            <Parts path='mouths' index={mouth} zIndex={4} />
            <Parts path='noses' index={0} zIndex={4} />
            <Parts path='eyebrows' index={eyebrow} zIndex={4} />
            <Parts path='accessories/glasses' index={glasses} zIndex={5} />
        </div>
    );
};

export default Avatar;