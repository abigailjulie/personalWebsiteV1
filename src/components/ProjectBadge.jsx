import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";
import React from "react";

export default function ProjectBadge({ badges }) {
    return (
        <Stack direction="horizontal" gap={2}>
            {badges.map((badge, index) => (
                <Badge key={index} pill bg="dark" className="projectBadge p-2">
                    {badge}
                </Badge>
            ))}
        </Stack>
    );
};