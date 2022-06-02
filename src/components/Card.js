import React from 'react';
import { Card } from 'flotiq-components-react';

const CustomCard = ({ title, excerpt, image, tags }) => {
    return (
        <Card
            bordered={false}
            rounded="none"
            additionalClasses={['mb-4 cursor-pointer border-b-4 border-primary shadow-lg ']}
        >
            {/* <GatsbyImage image={image} alt={title} className='card-img' /> */}
            <Card.Body
                additionalClasses={[
                    'flex flex-col items-start justify-between order-2 lg:order-1 px-5 pt-10 pb-5',
                ]}
            >
                <div className="flex flex-wrap justify-start text-sm font-light mb-3 space-x-5">
                    {tags && tags.join(', ')}
                </div>
                <Card.Title additionalClasses={['uppercase !text-2xl line-clamp-1']}>
                    {title}
                </Card.Title>
                <Card.Text additionalClasses={['line-clamp-4 mt-5']}>
                    {excerpt}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
export default CustomCard;
