import React from 'react'
import CopyEvent from './CopyEvent'
import Input from './Input'
import ScrollEvent from './ScrollEvent'
import OnFocus from './OnFocus'
import KeyDown from './KeyDown'
import PasteEvent from './PasteEvent'
import ResizeEvent from './ResizeEvent'
import SubmitEvent from './SubmitEvent'
import TabStyleChanger from './TabStyleChanger'
import HobbySelector from './HobbySelector'
import MouseMove from './MouseMove'
import TitleChange from './TitleChange'
import DragDrop from './DragDrop'
import MessageDisplay from './MassageDisplay'

function Events() {
    return (
        <div>
            <CopyEvent />
            <PasteEvent />
            <Input />
            <ScrollEvent />
            <OnFocus />
            <KeyDown />
            <MouseMove />
            <ResizeEvent />
            <SubmitEvent />
            <TabStyleChanger />
            <HobbySelector />
            <TitleChange />
            <DragDrop />
            <MessageDisplay />
        </div>
    )
}

export default Events