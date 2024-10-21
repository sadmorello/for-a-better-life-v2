'use client';

import { Pagination } from "@nextui-org/pagination";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/table";
import { Chip, ChipProps } from "@nextui-org/chip";

const rows = [
  {
    key: "1",
    name: "Tony Reichert",
    time: "11:00 AM",
    date: "20/10/2024",
    model: "Presencial",
    status: "Pendente",
  },
  {
    key: "2",
    name: "Zoey Lang",
    time: "5:00 PM",
    date: "20/10/2024",
    model: "Presencial",
    status: "Cancelado",
  },
  {
    key: "3",
    name: "Jane Fisher",
    time: "1:00 PM",
    date: "20/10/2024",
    model: "Presencial",
    status: "Concluído",
  },
  {
    key: "4",
    name: "William Howard",
    time: "8:00 AM",
    date: "20/10/2024",
    model: "Presencial",
    status: "Concluído",
  },
];

const columns = [
  {
    key: "terapeuta",
    label: "Paciente",
  },
  {
    key: "date",
    label: "Data",
  },
  {
    key: "time",
    label: "Horário",
  },
  {
    key: "model",
    label: "Modelo",
  },
  {
    key: "status",
    label: "Status",
  },
];

const statusColorMap: Record<string, ChipProps["color"]> = {
  Concluído: "success",
  Cancelado: "danger",
  Pendente: "warning",
};

export const ScheduleTable = () => {

  return (
    <>
      <Table
        

        bottomContent={
          <div className="flex w-full justify-center">
            <Pagination key="light" showControls total={100} initialPage={1} variant="light" />
          </div>
        }
      >
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.time}</TableCell>
              <TableCell>{item.model}</TableCell>
              <TableCell><Chip size="sm" variant="solid" color={statusColorMap[item.status]}>{item.status}</Chip></TableCell>
            </TableRow>
          )}
        </TableBody>

      </Table>

    </>
  );
};