import { FC } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";

interface ChapterAccordionProps {
  title: string;
  chapter: number;
  expandedChapter: number;
  toggleExpandedChapter: any;
}

export const ChapterAccordion: FC<ChapterAccordionProps> = ({
  title,
  chapter,
  expandedChapter,
  toggleExpandedChapter,
  children,
}) => (
  <Accordion
    expanded={expandedChapter === chapter}
    onClick={() => toggleExpandedChapter(chapter)}
    disableGutters
    elevation={0}
    square
    sx={{ background: "transparent" }}
  >
    <AccordionSummary>
      <Box
        sx={{
          color: "white",
          fontSize: "34px",
          fontFamily: "Helvetica",
          textTransform: "uppercase",
          ":hover": { color: "#0000ff" },
          "@media (max-width: 400px)": { fontSize: "24px" },
        }}
      >{`${chapter} ${title}`}</Box>
    </AccordionSummary>
    <AccordionDetails>
      <Box sx={{ color: "white" }}>{children}</Box>
    </AccordionDetails>
  </Accordion>
);
