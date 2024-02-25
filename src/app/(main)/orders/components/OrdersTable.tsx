"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  Chip,
  Tooltip,
  TableRow,
  TableCell,
  Pagination,
} from "@nextui-org/react";
import { MdEditNotifications } from "react-icons/md";
import { BiTrash } from "react-icons/bi";
import { orders, columns } from "./data";
import { FaEye } from "react-icons/fa";

const statusColorMap: any = {
  new: "primary",
  preparing: "secondary",
  onWay: "warning",
  handed: "success",
  canceled: "danger",
};

export default function OrdersTable() {
  const renderCell = React.useCallback((order: any, columnKey: any) => {
    const cellValue = order[columnKey];

    switch (columnKey) {
      case "status":
        return (
          <Chip
            className="capitalize text-center "
            color={statusColorMap[order.status]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400  cursor-pointer active:opacity-50">
                <FaEye />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <BiTrash />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table
      topContent={
        <div>
          <h1 className="text-2xl font-semibold">Orders</h1>
        </div>
      }
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            size="md"
            showControls
            showShadow={false}
            color="primary"
            total={5}
          />
        </div>
      }
      className="mt-10"
      aria-label="Example empty table"
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={orders}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
