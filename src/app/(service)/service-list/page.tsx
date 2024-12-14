"use client";

import { useState } from "react";
import { Button } from "@/shared/ui/button";
import { Badge } from "@/shared/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table";
import {
  Plus,
  Pencil,
  Trash2,
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  FileText,
  Settings,
} from "lucide-react";
import { CreateServiceModal } from "./create-service-modal";

interface Service {
  id: number;
  name: string;
  basePrice: number;
  markup: number;
  finalPrice: number;
  isActive: boolean;
}

export default function ServiceCatalog() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services: Service[] = [
    {
      id: 1,
      name: "Биочистка",
      basePrice: 1000,
      markup: 15,
      finalPrice: 1150,
      isActive: true,
    },
    {
      id: 2,
      name: "Биочистка",
      basePrice: 1000,
      markup: 15,
      finalPrice: 1150,
      isActive: false,
    },
    {
      id: 3,
      name: "Биочистка",
      basePrice: 1000,
      markup: 15,
      finalPrice: 1150,
      isActive: true,
    },
    {
      id: 4,
      name: "Биочистка",
      basePrice: 0,
      markup: 0,
      finalPrice: 0,
      isActive: true,
    },
  ];

  const categories = [
    { id: "leather", name: "Кожа", active: true },
    { id: "everyday", name: "Повседневная одежда", active: false },
    { id: "fur", name: "Мех", active: false },
    { id: "home", name: "Домашний текстиль", active: false },
    { id: "bags", name: "Сумки", active: false },
    { id: "laundry", name: "Прачечные услуги", active: false },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <nav className="w-64 bg-[#29375F] text-white">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-6">12:03</h2>
          <h3 className="text-sm mb-6">14 ноября</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center p-2 hover:bg-[#3A4E80] rounded"
              >
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Рабочий стол
              </a>
            </li>
            <li>
              <details className="group">
                <summary className="flex items-center p-2 hover:bg-[#3A4E80] rounded cursor-pointer">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Продажи
                </summary>
                <ul className="pl-6 mt-2 space-y-1 text-sm">
                  <li>
                    <a
                      href="#"
                      className="block p-2 hover:bg-[#3A4E80] rounded"
                    >
                      Создать продажу
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block p-2 hover:bg-[#3A4E80] rounded"
                    >
                      Чеки
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block p-2 hover:bg-[#3A4E80] rounded"
                    >
                      Прачечки
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block p-2 hover:bg-[#3A4E80] rounded"
                    >
                      Отмены
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block p-2 hover:bg-[#3A4E80] rounded"
                    >
                      Внесения / инкассации
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block p-2 hover:bg-[#3A4E80] rounded"
                    >
                      Кассовые отчеты
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block p-2 hover:bg-[#3A4E80] rounded"
                    >
                      Предзаказы
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block p-2 hover:bg-[#3A4E80] rounded"
                    >
                      Открытые заказы
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 bg-[#3A4E80] rounded"
              >
                <Package className="mr-2 h-4 w-4" />
                Номенклатура
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 hover:bg-[#3A4E80] rounded"
              >
                <Users className="mr-2 h-4 w-4" />
                Профиль
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 hover:bg-[#3A4E80] rounded"
              >
                <FileText className="mr-2 h-4 w-4" />
                Справочники
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white">
        <div className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-800">Услуги</h1>
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#4878D6] hover:bg-[#3A62B3] text-white"
            >
              <Plus className="mr-2 h-4 w-4" />
              Создать услугу
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category.id}
                variant={category.active ? "default" : "outline"}
                className={`cursor-pointer ${category.active ? "bg-[#4878D6] hover:bg-[#3A62B3] text-white" : "text-[#4878D6] border-[#4878D6] hover:bg-[#EDF2FB]"}`}
              >
                {category.name}
              </Badge>
            ))}
          </div>

          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9FBFD] border-b border-gray-200">
                <TableHead className="w-16 text-gray-600">ID</TableHead>
                <TableHead className="text-gray-600">
                  Наименование услуги
                </TableHead>
                <TableHead className="text-right text-gray-600">
                  Базовая цена
                </TableHead>
                <TableHead className="text-right text-gray-600">
                  Наценка
                </TableHead>
                <TableHead className="text-right text-gray-600">
                  Стоимость с учетом наценки
                </TableHead>
                <TableHead className="text-gray-600">Статус</TableHead>
                <TableHead className="w-24 text-gray-600">Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map((service) => (
                <TableRow key={service.id} className="border-b border-gray-100">
                  <TableCell className="font-medium text-gray-700">
                    {service.id}
                  </TableCell>
                  <TableCell className="text-gray-700">
                    {service.name}
                  </TableCell>
                  <TableCell className="text-right text-gray-700">
                    {service.basePrice} ₽
                  </TableCell>
                  <TableCell className="text-right text-gray-700">
                    {service.markup} %
                  </TableCell>
                  <TableCell className="text-right text-gray-700">
                    {service.finalPrice} ₽
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={service.isActive ? "success" : "destructive"}
                      className={`${service.isActive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                    >
                      {service.isActive ? "Активен" : "Деактивирован"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex justify-between items-center">
            <Button
              variant="default"
              className="w-32 bg-[#4878D6] hover:bg-[#3A62B3] text-white"
            >
              Сохранить
            </Button>
            <div className="flex gap-1">
              {[1, 2, 3, "...", 35, 36].map((page, index) => (
                <Button
                  key={index}
                  variant={page === 2 ? "default" : "ghost"}
                  size="icon"
                  className={`w-8 h-8 ${page === 2 ? "bg-[#4878D6] text-white" : "text-gray-600 hover:bg-gray-100"}`}
                >
                  {page}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </main>
      <CreateServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
