import React from 'react';
import Header from '../../organisms/layouts/Header';

type Props = {
    welcomeText: string;
}

const HomepageTemplate: React.FC<Props> = ({welcomeText}) => {
    return (
        <React.Fragment>
            <Header />
            <div>
                {welcomeText}
            </div>
        </React.Fragment>
    );
};

export default HomepageTemplate;
