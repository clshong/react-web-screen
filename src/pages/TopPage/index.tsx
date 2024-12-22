import { useEffect, useRef, useState } from 'react';
import { formatTime } from '@/utils/index';


import { Decoration6, Decoration8, Decoration10, Decoration11 } from "@jiaminghi/data-view-react";

import { TopBox, TimeBox } from './style';

import { title } from '@/config/index'


const TopPageIndex = () => {
    const [timeStr, serTimeStr] = useState("")

    useEffect(() => {
        const interval = setInterval(() => {
            serTimeStr(formatTime());
        }, 1000);
        // 清理定时器
        return () => clearInterval(interval);
    }, [])

    return (
        <>
            <TopBox>
                <div className='top_box'>
                    <Decoration10 className='top_decoration10' />
                    <div className='title-box'>
                        <Decoration8
                            className='top_decoration8'
                            color={['#568aea', '#000000']}
                        />
                        <div className='title'>
                            <Decoration11 className='title-text'>{title}</Decoration11>
                            <Decoration6
                                className='title-bototm top_decoration6'
                                reverse={true}
                                color={['#50e3c2', '#67a1e5']}
                            />
                        </div>

                        <Decoration8
                            reverse={true}
                            className='top_decoration8'
                            color={['#568aea', '#000000']}
                        />
                    </div>
                    <Decoration10 className='top_decoration10 top_decoration10_reverse' />
                    <TimeBox>
                        <h3>{timeStr}</h3>
                    </TimeBox>
                </div>
            </TopBox>
        </>
    )
}


export default TopPageIndex