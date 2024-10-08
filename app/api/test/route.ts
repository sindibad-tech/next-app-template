import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const response: {
    successful: boolean;
    message: string;
    result: any;
  } = {
    successful: true,
    message: "Successful",
    result: null,
  };

  try {
    const { searchParams } = new URL(request.url);
    const test = searchParams.get("test");
    response.result = test;

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: unknown) {
    response.successful = false;
    response.message = "Exception Happened!";
    if (error instanceof Error) {
      console.error("Error message:", error.message);
    } else {
      console.error("Unknown error:", error);
    }

    return new Response(JSON.stringify(response), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
