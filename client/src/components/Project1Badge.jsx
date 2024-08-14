import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import React from 'react';

export default function Project1Badge() {
    return (
        <Stack direction="horizontal" gap={2}>
            <Badge pill bg="dark">React</Badge>
            <Badge pill bg="dark">Node.js</Badge>
            <Badge pill bg="dark">MongoDB</Badge>
        </Stack>
    );
}