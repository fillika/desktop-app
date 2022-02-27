import * as React from 'react';
import './index.scss';

import { Desktop } from '@features/desktop';
import { MainSidebar } from '@features/main-sidebar';

export const App: React.FC = () => {
    return (
        <div className='root-container'>
            <MainSidebar />
            <Desktop />
        </div>
    );
};
