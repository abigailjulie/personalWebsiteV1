import React from 'react';
import { Document, Page } from 'react-pdf';
import AbigailFigaroResume from '../assets/pdf/AbigailFigaroResume.pdf';

export default function Resume() {
    return (
        <Document file={AbigailFigaroResume}>
            <Page pageNumber={1} />
        </Document>
    );
}
