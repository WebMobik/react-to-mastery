import React, { Component } from 'react';

import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

export default class Directory extends Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
                    id: 1
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
                    id: 2
                },
                {
                    title: 'snearers',
                    imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
                    id: 3
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
                    id: 4
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
                    id: 5
                },
            ]
        }
    }
    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({ ...props }) => (
                        <MenuItem { ...props }/>
                    ))
                }
            </div>
        )
    }
}