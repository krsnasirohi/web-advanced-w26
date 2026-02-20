"use client";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Your Clubs</h1>
      <ul className="list-disc pl-6">
        <li>
          <Link href="/departments/EECS" className="underline">
            EECS Department
          </Link>
        </li>
      </ul>
    </div>
  );
}

/*"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";

export default function DashboardPage() {
  const [names, setNames] = useState([]);
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  useEffect(() => {
    const fetchNames = async () => {
      const { data } = await supabase.from("your_table_name").select("name");
      setNames(data || []);
    };
    fetchNames();
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Your Clubs</h1>
      <ul className="list-disc pl-6">
        {names.map((item: any) => (
          <li key={item.id}>
            <Link href={`/departments/${item.id}`} className="underline">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}*/
