
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const governmentExams = [
  { exam: "SSC CHSL", eligibility: "12th Pass", salaryRange: "₹19,900 – ₹81,100/month" },
  { exam: "SSC MTS", eligibility: "10th/12th Pass", salaryRange: "₹18,000 – ₹56,900/month" },
  { exam: "RRB Group D", eligibility: "10th/12th Pass", salaryRange: "₹18,000 – ₹56,900/month" },
  { exam: "RRB ALP", eligibility: "12th with Science/ITI", salaryRange: "₹19,900 – ₹65,700/month" },
  { exam: "Indian Navy (SSR/MR/AA)", eligibility: "12th Pass", salaryRange: "₹21,700 – ₹69,100/month" },
  { exam: "Air Force Airmen (Group X & Y)", eligibility: "12th with Science/Math", salaryRange: "₹26,900 – ₹86,100/month" },
  { exam: "Delhi Police Constable", eligibility: "12th Pass", salaryRange: "₹25,500 – ₹81,100/month" },
  { exam: "CISF/BSF/CRPF/ITBP", eligibility: "12th Pass", salaryRange: "₹21,700 – ₹69,100/month" },
  { exam: "State Police Constable", eligibility: "12th Pass", salaryRange: "₹19,900 – ₹63,200/month" },
  { exam: "Forest Guard", eligibility: "12th Pass", salaryRange: "₹21,700 – ₹69,100/month" },
  { exam: "India Post GDS", eligibility: "10th/12th Pass", salaryRange: "₹10,000 – ₹14,500/month" },
  { exam: "Indian Coast Guard", eligibility: "12th Pass", salaryRange: "₹21,700 – ₹69,100/month" },
  { exam: "ESIC UDC", eligibility: "12th Pass", salaryRange: "₹25,500 – ₹81,100/month" }
];

const GovtExamsTable: React.FC = () => {
  return (
    <div className="mt-4 rounded-md border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/3">Exam Name</TableHead>
            <TableHead className="w-1/3">Eligibility</TableHead>
            <TableHead className="w-1/3">Salary Range</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {governmentExams.map((exam, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">{exam.exam}</TableCell>
              <TableCell>{exam.eligibility}</TableCell>
              <TableCell>{exam.salaryRange}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default GovtExamsTable;
