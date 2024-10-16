import React from 'react';
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { expect, test, describe } from "@jest/globals";
import Page from "@/app/(pages)/(website)/(home)/page";

describe("Testing home UI: Unit testing", () => {
    test("display the homepage", () => {
        // arrange
        render(<Page />);

        // act
        const heading = screen.getByRole("heading", {
            name: "home",
        });

        //assert
        expect(heading).toBeDefined();
    });
});
